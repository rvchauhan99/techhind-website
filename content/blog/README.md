# Blog content for techhind.in

- Published posts: `status: "published"` → appear on `/blog` and sitemap.
- Drafts: `status: "draft"` → hidden from public blog index/sitemap until flipped.

Create drafts with `techhind-seo-agent`:

```bash
cd ../techhind-seo-agent
npm run stage -- --keyword="your keyword" --no-llm
# edit the file, then:
npm run publish -- --slug=your-slug
```

See `../techhind-seo-agent/docs/SEO-CADENCE.md`.
