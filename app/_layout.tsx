import {Stack, useRouter} from "expo-router";
import { Route } from "expo-router/build/Route";
import { useEffect } from "react";

function RouteGuard({children}: {children: React.ReactNode}){
  const router = useRouter();
  const isAuth = false;
  
  useEffect(() => {
    if(!isAuth){
      router.replace("/auth");
    }
  });

  return <>{children}</>

}

//shower
export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false }}/>
      </Stack>
    </RouteGuard>
  );
}
