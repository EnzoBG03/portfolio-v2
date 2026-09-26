// Load all assets using Vite's glob import
const assets = import.meta.glob('/src/assets/**/*', { eager: true, import: 'default' });

export function getAssetUrl(path) {
  // If it's already an absolute path or full URL, return it
  if (!path || path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }

  // Format the path to match the glob keys
  let normalizedPath = path;
  if (path.startsWith('./')) {
    normalizedPath = path.replace('./', '/src/assets/');
  } else if (!path.startsWith('/src/assets/')) {
    normalizedPath = '/src/assets/' + path.replace(/^\/+/, ''); // Remove leading slash if any
  }

  // Return the hashed URL from the assets map, or fallback to the original path
  return assets[normalizedPath] || path;
}