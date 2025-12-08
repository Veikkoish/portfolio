import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { existsSync } from 'fs';

const PUBLIC_DIR = './public';
const PROJECT_FOLDERS = [
  'Daylight',
  'Go-Kart V2',
  'Omniframe',
  'RoboChess',
  'Hey Mac',
  'Lampiron',
  'Memory Player',
  'Sunwhisper',
  'Vitrail',
  'Verify',
];

async function isDirectory(path) {
  try {
    const stats = await stat(path);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

async function getImageFiles(dir) {
  const files = [];
  try {
    const entries = await readdir(dir);
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      if (await isDirectory(fullPath)) {
        files.push(...await getImageFiles(fullPath));
      } else {
        const ext = extname(entry).toLowerCase();
        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
          files.push(fullPath);
        }
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err.message);
  }
  return files;
}

async function convertToWebP(inputPath) {
  const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Skip if WebP already exists
  if (existsSync(outputPath)) {
    console.log(`Skipping ${inputPath} (WebP already exists)`);
    return;
  }

  try {
    await sharp(inputPath)
      .webp({ 
        quality: 70,
        effort: 6,
        lossless: false
      })
      .toFile(outputPath);
    
    console.log(`✓ Converted: ${inputPath} → ${outputPath}`);
  } catch (err) {
    console.error(`✗ Failed to convert ${inputPath}:`, err.message);
  }
}

async function main() {
  console.log('Converting images to WebP...\n');
  
  for (const folder of PROJECT_FOLDERS) {
    const folderPath = join(PUBLIC_DIR, folder);
    if (!existsSync(folderPath)) {
      continue;
    }
    
    console.log(`Processing ${folder}...`);
    const imageFiles = await getImageFiles(folderPath);
    
    for (const file of imageFiles) {
      await convertToWebP(file);
    }
  }
  
  console.log('\nConversion complete!');
}

main().catch(console.error);

