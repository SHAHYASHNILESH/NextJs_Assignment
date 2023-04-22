import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch("https://www.reddit.com/r/images/new.json?limit=30");
  const data = await res.json();
  console.log(data.data.children[0]);

  return {
    props: {
      data,
    },
  };
};

const Home = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          {data.data.children.map((curElem) => {
            return (
              <div key={curElem.data.title}>
                <h3>Title:{curElem.data.title}</h3>
                <h3>Image:</h3>
                <img src={curElem.data.url}/><br/>
              </div>
            );
          })}
        </>
      ) : (
        <>Hello World</>
      )}
    </>
  );
};

export default Home;
