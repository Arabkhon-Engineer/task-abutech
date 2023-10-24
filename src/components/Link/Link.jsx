import { useContext } from "react";
import { MyContext } from "../../context/Context";
import LinkItem from "../LinkItem/LinkItem";
const Link = () => {
  const linkData = useContext(MyContext);
  return (
    <div className="link_box">
      {linkData.map((item) => {
        return (
          <div key={item.id}>
            <LinkItem link = {item.link} name = {item.name} img = {item.image} icon= {item.link_icon} />
          </div>
        );
      })}
    </div>
  );
};

export default Link;

//   const [data, setData] = useState<Data>()
// const fetchJson = () => {
//   fetch('./data.json')
//   .then(response => {
//     return response.json();
//   }).then(data => {
//     setData(data);
//   }).catch((e: Error) => {
//     console.log(e.message);
//   });
// }
// useEffect(() => {
//   fetchJson()
// },[])
