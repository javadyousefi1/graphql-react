import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../graphql/charactersQuery";
import CharcterCart from "../../components/home/CharcterCart";
const Home = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS);

    return (<section className="mt-10">
        <div className="container mx-auto grid grid-cols-3 gap-5">
            {data?.characters?.results?.map(item => <CharcterCart name={item?.name} image={item?.image} />)}
        </div>
    </section>);
}

export default Home;