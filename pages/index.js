import fetch from "isomorphic-fetch";
import Head from "next/head";
import List from "../components/list";
import Template from "../components/template";

const Index = ({ users }) => {
  return (
    <>
      <Head>
        <title>NA - home</title>
      </Head>
      <Template>
        <h2>My users</h2>
        <div>
          <List users={users}/>
        </div>
      </Template>
    </>
  )
}

export default Index;

Index.getInitialProps = async () => {
  const res = await fetch('https://reqres.in/api/users');
  const users = await res.json();
  return {users: users.data};
}