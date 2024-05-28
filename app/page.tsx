"use client";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import useSWR from "swr";
import { User } from "./type";
import { Footer } from "./components/home/home.footer";
import NavBarHeader from "./components/home/home.header";

function TableContent({ data }: { data: User[] }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}

        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.title}</td>
            <td>{user.body}</td>
            <td>{user.userId}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log("data", data);
  return (
    <div>
      <NavBarHeader />
      <Container fluid className="flex justify-content-center px-md-10">
        <TableContent data={data} />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
