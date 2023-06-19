import React, { useState } from "react";
import styles from "./Home.module.scss";
import ChatList from "../../chatList/ChatList";
import cn from "classnames";

function Home() {
  const initState = [
    { isAssistance: true, message: "Hello", id: 1 },
    { isAssistance: false, message: "this is", id: 2 },
    {
      isAssistance: false,
      message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit debitis magnam ullam vero molestias eveniet obcaecati amet excepturi. Eligendi, natus accusamus esse nisi distinctio doloremque. Corrupti architecto eum vitae. Debitis!
    Assumenda veniam saepe necessitatibus provident eos, laborum numquam nulla inventore. Ex exercitationem at odio. Incidunt libero esse optio soluta tempora, corporis placeat voluptatem atque fuga commodi illum ut quo pariatur?
    Quasi quisquam ex doloribus debitis quod sunt corrupti nisi sit dicta, recusandae nulla autem hic error incidunt. Consequuntur, qui, a recusandae optio rem blanditiis aliquam omnis placeat deleniti dicta quas.
    Eligendi id, ipsum nam eos iusto pariatur eveniet dolorem et magni ullam ex! Perferendis fuga tempora dolores ab quae eaque. Blanditiis accusamus commodi ipsam ullam at porro veniam rem perspiciatis.
    In quam natus minus dignissimos veritatis enim temporibus suscipit, esse magnam ex est, sed id ipsum reprehenderit. Culpa modi earum ullam repellendus nulla. Nihil, veniam. Corporis voluptate magnam modi ab.
    Voluptatem laboriosam aperiam atque iusto, vero corporis blanditiis, expedita quibusdam ullam non impedit veniam. Ipsam ut, modi beatae inventore numquam delectus facilis expedita dolores, soluta error laudantium minima quam tempore?
    Error eveniet corporis molestiae dicta deleniti temporibus non fugit magnam, est assumenda repellat a reprehenderit, ipsam rerum iusto enim ad ratione, voluptatibus cupiditate unde dolores neque minus ducimus perspiciatis. Illo.
    Quo maxime nam, similique architecto ex, quas perferendis, officiis laudantium impedit quidem quis asperiores tempora iste incidunt! Consectetur modi quae nostrum quidem recusandae vero omnis, nemo incidunt corrupti voluptate! Possimus!
    Corporis deserunt earum explicabo aliquam amet in placeat ad, rem excepturi exercitationem ab non porro est distinctio! Inventore repudiandae officiis quibusdam quasi sapiente, est similique quidem ad perspiciatis, in quisquam.
    Dicta suscipit quidem iure cumque molestiae vero veniam sed magnam cupiditate. Provident explicabo dolorem, impedit dolor doloremque dolore, optio sit quae distinctio hic voluptate ab dignissimos maxime deserunt neque temporibus.`,
      id: 3,
    },
  ];
  const [messages, setMessages] = useState(initState);

  return (
    <div className={cn(styles.wrapper, "container")}>
      <ChatList messages={messages} />
    </div>
  );
}

export default Home;
