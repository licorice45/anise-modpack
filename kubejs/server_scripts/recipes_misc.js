ServerEvents.recipes(event => {
	event.shaped(
		Item.of('spelunkery:rope_ladder'),
		['R R', 'SSS', 'R R'],
		{R: 'farmersdelight:rope', S: 'minecraft:stick'}
	)
})
