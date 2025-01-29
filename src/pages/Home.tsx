function Home(){
    return(
        <section className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/gym-bg.jpg")' }}>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-center text-white"/>
        <h1 className="text-5xl font-bold">Transforme Seu Corpo</h1>
        <p className="mt-4 text-lg">Junte-se à nossa academia hoje mesmo!</p>
    </section>
    )

}
export default Home

