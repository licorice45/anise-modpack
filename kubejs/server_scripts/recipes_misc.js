ServerEvents.recipes(event => {
	event.shaped(
		Item.of('spelunkery:rope_ladder', 8),
		['R R', 'SSS', 'R R'],
		{R: 'farmersdelight:rope', S: 'minecraft:stick'}
	)
})
