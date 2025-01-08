import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: 'Chat Screen'}} />
      <Stack.Screen name="documentDraft" options={{title: "Document Draft"}} />
    </Stack>
  )
}
