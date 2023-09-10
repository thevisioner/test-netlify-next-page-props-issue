import { GetServerSidePropsContext } from "next";
import Link from "next/link";

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  return {
    props: {
      test: "Test",
      params,
    },
  };
}

interface PageProps {
  test: string;
  params: unknown;
}

export default function Page({ test, params }: PageProps) {
  console.log(test, params);
  return (
    <div>
      <p>
        Should render &quot;Test&quot;: <strong>{test}</strong>
      </p>
      <pre>{typeof params}</pre>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      <nav>
        <ul>
          <li>
            <Link href="/page-1">Page 1</Link>
          </li>
          <li>
            <Link href="/page-2">Page 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
