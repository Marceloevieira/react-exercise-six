import { StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native';
import { RedditItem } from './components/RedditItem';
import { usePosts } from './hooks/usePosts';

export default function App() {

  const posts = usePosts();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <RedditItem item={item} />}
        keyExtractor={item => item.data.id}
      >
      </FlatList>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }

});
