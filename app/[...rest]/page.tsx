export default function CatchAll({ params: { rest } }: { params: { rest: string[] } }) {
  return (
    <main>
      Catch All {JSON.stringify(rest)}
    </main>
  )
}
