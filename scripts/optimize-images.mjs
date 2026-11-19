import sharp from 'sharp';
import { readdirSync } from 'fs';
const dir = 'public/images';
for (const f of readdirSync(dir).filter((x) => x.endsWith('.webp'))) {
  const p = `${dir}/${f}`;
  const img = sharp(p); const meta = await img.metadata();
  if ((meta.width || 0) > 1200) { const buf = await img.resize(1200).webp({ quality: 78 }).toBuffer(); await sharp(buf).toFile(p + '.tmp'); const { renameSync } = await import('fs'); renameSync(p + '.tmp', p); console.log(f, meta.width, '-> 1200'); }
  else console.log(f, meta.width, 'ok');
}
await sharp('public/images/hero-dancer.webp').resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 80 }).toFile('public/images/og-home.jpg');
console.log('og-home.jpg done');
