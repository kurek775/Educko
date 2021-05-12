import VytvareniPredmetuForm from "../../components/pridavani-predmetu/form";
import classes from "./index.module.css";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { useState } from "react";
import { connectToDatabase } from "../../helpers/db";

function PridavaniPredmetu(subjects) {
  console.log(subjects);
  const router = useRouter();
  const [error, setError] = useState(false);
  async function addSubjectHandler(subjectData) {
    const response = await fetch("/api/subject/addSubject", {
      method: "POST",
      body: JSON.stringify(subjectData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      setError(true);
      return;
    }
    console.log(data);
    router.replace("/");
  }

  return (
    <div className={classes.modal}>
      <VytvareniPredmetuForm onAddSubject={addSubjectHandler} />
      {error && <p>Při vytváření předmětu se stala chyba</p>}
      <div>
        <h1>Již vytvořené předměty</h1>
        <div>
          {subjects.subject.map((subject) => (
            <div key={subject._id}>
              <h3>{subject.predmet}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const client = await connectToDatabase();
  const subjectCollection = await client
    .db()
    .collection("Subject")
    .find({})
    .toArray();
  console.log(subjectCollection);
  if (!session) {
    return {
      redirect: {
        destination: "/login-page",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        subject: JSON.parse(JSON.stringify(subjectCollection)),
      },
    };
  }
}

export default PridavaniPredmetu;
