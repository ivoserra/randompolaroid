export default generateFakeData 



function generateFakeData() {

    const URL = [
        'https://images.unsplash.com/photo-1521979548744-463128ea80d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1515468754461-a1242b9bcbf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1598376270492-65a92eee9b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=901&q=80',
        'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1508511131932-e0c7679d447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1422015347944-9dd46d16bd0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1600086391867-bcd6f5f34972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80',
        'https://images.unsplash.com/photo-1585686023422-7c61002b15c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1600354896354-6881b8467572?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
        'https://images.unsplash.com/photo-1596477225155-7d6a69493463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxvbGQlMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1533896360818-fd24410f0c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=885&q=80',
        'https://images.unsplash.com/photo-1622551292635-d84422c03af9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1597226944661-6813f17ca22d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1623279562979-dad964fc0ea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
        'https://images.unsplash.com/photo-1641463594370-68593b56552c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxvbGQlMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80',
        'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1479791261936-65db171c3cc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
        'https://images.unsplash.com/photo-1516962126636-27ad087061cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1583225214464-9296029427aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=625&q=80',
        'https://images.unsplash.com/photo-1583225214464-9296029427aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=625&q=80',
        'https://images.unsplash.com/photo-1476087433162-979f1a57093f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        'https://images.unsplash.com/photo-1498511225742-7831d53e64b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1522673999312-93aa76caeda6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHx2aW50YWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1531490150853-24076474c6b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHx2aW50YWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1522775417749-29284fb89f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1507603103250-564d0c9b6778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1530209925954-8aecf4eb1e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1463595663992-cb0dc1d6403f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80',
        'https://images.unsplash.com/photo-1531384370597-8590413be50a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1575650980099-fe098264560c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
        'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1559825195-0cebb6ea1d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
     ].sort(()=> 0.5 - Math.random())

     console.log(URL)

    const cities=[
        'NYC', 'Los Angeles', 'Riga', 'Tallinn', 'Berlin', 'Paris', 'London', 'Brussels', 'Kuopio', 'Kreta', 'Lisbon', 'Antwerp', 'Helsinki', 'Oslo','Sardinia', 'St.Petersburg', 'Zurich','Wien','Amsterdam', 'Warsaw','Theeran','Madrid','Barcelona','Moscow', 'Hongkong', 'Tokyo','Sao Paulo','Angola','Mozambique'
    ].sort((a,b)=> 0.5 - Math.random())
    console.log(cities.length)


   const names=['André Kleinschmidt', 'Angela Herrig', 'Adrean Ramires', 'Ashley Jiang', 'Brian Ladwig', 'Darren Snell','Eleni Katsareli','Hallie Barrows','Henrik Kürschner', 'Ivo Serra','James Newton', 'Jay Radan','Joel Peltonen', 'Kristin Tatro','Latifah Alsubaie','Matthias Baumann','Nasim Reza','Melanie Ehanire', 'Monika Ghimire','Murad Muqbel','Ömer IIiski', 'Ronny Korneli','Ruslan Tissen', 'Slawomir Krzyzak','Antonia'
    ].sort((a,b)=> 0.5 - Math.random())
    console.log(names.length)


    const data = [].sort((a,b)=> 0.5 - Math.random())

    for (let i = 25; --i;) {
        data.push({
            id: i,
            name: `${names[i]}`,
            city: `${cities[i]}`,
            image: `${URL[i]}`,
            
        })
    }

    return data;
}

