export default async function Page({ params }: { params: { slug: string } }) {
  console.log('params', params.slug);
  return <div>Page About us</div>;
}
