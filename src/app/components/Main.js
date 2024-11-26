import Card from './Card'

const cards = [
  {
    title: 'The Coldest Sunset',
    img: 'https://images.unsplash.com/photo-1731410612760-4d9ae680d5e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'The Darkest Sunset',
    img: 'https://images.unsplash.com/photo-1520038569969-98da7959fcbd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'The Warmest Sunset',
    img: 'https://images.unsplash.com/photo-1716204162377-e675dc53fd7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function Main() {
  return (
    <main>
      <div
        className="flex gap-x-12 my-12 flex-wrap gap-y-6"
        id="card-container"
      >
        {cards.map((card, index) => (
          <Card key={index} title={card.title} image={card.img} />
        ))}
      </div>
    </main>
  )
}
