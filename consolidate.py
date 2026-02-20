
import os

base_path = '/Volumes/KINGSTON/EasyMix/website'
output_path = '/Volumes/KINGSTON/EasyMix/exported_site/index_consolidated.html'

def consolidate():
    with open(os.path.join(base_path, 'index.html'), 'r', encoding='utf-8') as f:
        html = f.read()

    with open(os.path.join(base_path, 'styles.css'), 'r', encoding='utf-8') as f:
        css = f.read()

    with open(os.path.join(base_path, 'script.js'), 'r', encoding='utf-8') as f:
        js = f.read()

    # Replace CSS link
    css_tag = '<style>\n' + css + '\n</style>'
    html = html.replace('<link rel="stylesheet" href="styles.css">', css_tag)

    # Replace JS script tag
    js_tag = '<script>\n' + js + '\n</script>'
    html = html.replace('<script src="script.js"></script>', js_tag)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)

if __name__ == '__main__':
    consolidate()
    print("Consolidation complete: " + output_path)
