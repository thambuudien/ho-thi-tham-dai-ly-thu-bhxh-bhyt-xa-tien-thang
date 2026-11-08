export default function sitemap() {
  const base = "https://www.hotham.vn";
  const blogs = [
    "gia-han-bhyt-me-linh-nhanh-chong",
    "dong-bhxh-tu-nguyen-de-co-luong-huu",
    "mua-bhyt-o-buu-dien-nhanh-gon",
    "nghi-viec-co-nen-dong-tiep-bhxh",
    "bhyt-ho-gia-dinh-giam-bao-nhieu",
    "mat-the-bhyt-giay-phai-lam-sao",
    "nguoi-gia-60-tuoi-dong-bhxh-co-duoc-luong-huu-khong",
    "bhyt-cho-con-di-hoc-phai-dong-the-nao",
    "dong-bhxh-o-nong-thon-co-loi-gi",
    "5-nam-lien-tuc-bhyt-quan-trong-the-nao",
  ];
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/bhxh`, lastModified: new Date() },
    { url: `${base}/bhyt`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    ...blogs.map((slug) => ({ url: `${base}/blog/${slug}`, lastModified: new Date() })),
  ];
}
