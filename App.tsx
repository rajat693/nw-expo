import { SafeAreaView } from "react-native";
import "./global.css";
import { Search } from "lucide-react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Search className="h-16 w-16 fill-red-500 text-green-600 stroke-violet-600" />
    </SafeAreaView>
  );
}
