import glob
import markdown

# read the html template
with open("template.html", "r", encoding="utf-8") as f:
    template = f.read()

# read in .md files in order of prefix
chapters_html = []
for filepath in sorted(glob.glob("chapters/*.md")):
    with open(filepath, "r", encoding="utf-8") as f:
        md_text = f.read()
    html = markdown.markdown(md_text, extensions=["fenced_code", "tables", "md_in_html"])
    chapters_html.append(f'<section class="chapter">\n{html}\n</section>')

# put the contents into the html template
final_html = template.replace("{{CONTENT}}", "\n".join(chapters_html))
with open("web/index.html", "w", encoding="utf-8") as f:
    f.write(final_html)

print(f"Built {len(chapters_html)} chapter(s) -> web/index.html")
