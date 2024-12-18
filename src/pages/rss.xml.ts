import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  interface BlogPost {
    data: {
      draft: boolean;
      title: string;
      description: string;
      date: string;
    };
    collection: string;
    slug: string;
  }

  const blog: BlogPost[] = (await getCollection("blog")).filter(
    (post: BlogPost) => !post.data.draft
  );

  interface Project {
    data: {
      draft: boolean;
      title: string;
      description: string;
      date: string;
    };
    collection: string;
    slug: string;
  }

  const projects: Project[] = (await getCollection("projects")).filter(
    (project: Project) => !project.data.draft
  );

  const items = [...blog, ...projects].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: new Date(item.data.date),
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}
