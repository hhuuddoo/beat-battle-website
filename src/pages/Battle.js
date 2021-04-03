import React from "react";
import { BattleGrid, SubmissionCard, Content, Header } from "../components";

export default function Battle() {
  return (
    <>
      <Header />
      <Content>
        <BattleGrid>
          <h2>Title</h2>
          <button>Hi</button>
          <button>Bye</button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            quaerat alias voluptatibus quam aspernatur eveniet repellat
            praesentium eos asperiores pariatur earum temporibus fugit quos
            officiis facere ex molestiae, quisquam nostrum exercitationem
            repellendus blanditiis aliquam iste, assumenda architecto? Maxime
            recusandae vitae omnis at soluta vero ullam dignissimos dolorem
            accusamus quo molestias maiores minima quam ea molestiae debitis
            velit, temporibus corrupti eveniet. Minus maxime tempora nesciunt
            eligendi aperiam ullam doloremque quis optio accusantium animi quo,
            explicabo maiores nostrum magni ratione deserunt praesentium! Vitae
            accusantium numquam vel debitis quo autem culpa! Rem necessitatibus
            sapiente error in ad consequatur natus officia numquam nesciunt
            dolores!
          </p>
          <h3>Submissions</h3>
          <SubmissionCard>1</SubmissionCard>
          <SubmissionCard>2</SubmissionCard>
          <SubmissionCard>3</SubmissionCard>
        </BattleGrid>
      </Content>
    </>
  );
}
