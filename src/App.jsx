import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "jicamargo",
    namePerson: "Jorge Camargo",
    isFollowing: true
  },
  {
    userName: "stefannyfiffe_",
    namePerson: "Stefanny Fiffe",
    isFollowing: false
  },
  {
    userName: "elonkusk",
    namePerson: "Elon Leonard Kusk ",
    isFollowing: true
  },
  {
    userName: "charlie01",
    namePerson: "Charlie Hughes",
    isFollowing: false
  },
];

export function App () {

  return (
    <section className="appTwitterUsers"> {
      users.map(({userName, namePerson, isFollowing }) => (
          <TwitterFollowCard
              key={userName}
              userName={userName} 
              name={namePerson} 
              initialIsFollowing={isFollowing}
          >
          </TwitterFollowCard>
        )
      )} 
    </section>
  );
}
