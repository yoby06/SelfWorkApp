import React, { useEffect , useState} from 'react'
import { Box,FlatList } from 'react-native';
import {  Center, NativeBaseProvider  } from "native-base";


export default function ImageCarousel() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c57a2fc73b15c17a4e435a7d9de3be35")
        .then(response => response.json())
        .then(response => console.log(response))
        setData(data);
        setLoading(false);
    }

    const renderItem = ({ item }) => {
        return (
          <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
            {item.title}
          </Box>
        );
    };

    useEffect(() => {
          fetchData();
     }, []);
    

    return (
            <NativeBaseProvider>
              <Center flex={1}>
              <Box> Fetch API</Box>
                {loading && <Box>Loading..</Box>}
                {data && (
                  <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                  />
                )}
              </Center>
            </NativeBaseProvider>
          );
}

