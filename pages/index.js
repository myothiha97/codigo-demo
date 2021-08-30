export default function Home() {
  return <></>;
}

export async function getServerSideProps() {
  return {
    props: {},
    redirect: {
      permanent: false,
      destination: "/work",
    },
  };
}
