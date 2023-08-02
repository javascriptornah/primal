"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../../../data/colors";
import Editor from "../../../components/Editor";
import supabase from "../../../utils/supabaseClient";

const Cont = styled.div`
  min-height: 100vh;
  padding-top: 200px;
`;

const Testing = () => {
  const [text, setText] = useState("hello world");

  useEffect(() => {
    const fetcher = async () => {
      try {
        const { data, error } = await supabase
          .from("article")
          .select("comments( comments(content))")
          .eq("id", 3);
        if (error) throw error;
        console.log("Data:");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetcher();
  }, []);
  return (
    <Cont colors={COLORS}>
      {/* <Editor section={text} setSection={setText} /> */}
    </Cont>
  );
};

export default Testing;
