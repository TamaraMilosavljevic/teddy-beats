import { useEffect } from "react";
import { usePlayerStore } from "../store/playerStore";
import axios from "axios";

export const useFetchTracks = () => {
  const { allTracks, setIsLoadingTracks, setAllTracks } = usePlayerStore();

  useEffect(() => {
    const getSongs = async () => {
      setIsLoadingTracks(true);
      await axios
        .get(
          "https://api.jamendo.com/v3.0/tracks/?client_id=6e6da827&format=json&limit=10"
        )
        .then((response) => setAllTracks(response.data.results))
        .catch((error) => console.log(error));
      setIsLoadingTracks(false);
    };
    if (allTracks) getSongs();
  }, []);
};
