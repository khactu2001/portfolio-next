"use client";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import useSWR from "swr";
import { User } from "./type";
import { Footer } from "./components/home/home.footer";
import NavBarHeader from "./components/home/home.header";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
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

  // GET();
  // console.log(
  //   "datakadjflk",
  //   tempData.reduce(
  //     (prev, cur) =>
  //       `${prev}, (${cur.id}, '${cur.userId}@gmail.com', '${cur.title}', '${cur.userId}')`
  //   ),
  //   ""
  // );
  return (
    <div>
      <NavBarHeader />
      {/* <Button
        variant="success"
        onClick={() => {
          GET();
        }}
      >
        About
      </Button> */}

      <Container fluid className="flex justify-content-center px-md-10">
        <TableContent data={data} />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
