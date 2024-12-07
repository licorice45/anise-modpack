ServerEvents.tags('block', event => {
	event.get('minecraft:needs_stone_tool')
		.remove('minecraft:copper_ore')
		.remove('minecraft:deepslate_copper_ore')
		.remove('spelunkery:andesite_copper_ore')
		.remove('spelunkery:diorite_copper_ore')
		.remove('spelunkery:granite_copper_ore')
		.remove('spelunkery:tuff_copper_ore')
		
		.remove('minecraft:raw_copper_block')
		
		.remove('minecraft:copper_block')
		.remove('minecraft:exposed_copper')
		.remove('minecraft:weathered_copper')
		.remove('minecraft:oxidized_copper')
		.remove('minecraft:waxed_copper_block')
		.remove('minecraft:waxed_exposed_copper')
		.remove('minecraft:waxed_weathered_copper')
		.remove('minecraft:waxed_oxidized_copper')
		
		.remove('minecraft:cut_copper')
		.remove('minecraft:exposed_cut_copper')
		.remove('minecraft:weathered_cut_copper')
		.remove('minecraft:oxidized_cut_copper')
		.remove('minecraft:waxed_cut_copper')
		.remove('minecraft:waxed_exposed_cut_copper')
		.remove('minecraft:waxed_weathered_cut_copper')
		.remove('minecraft:waxed_oxidized_cut_copper')
		
		.remove('minecraft:cut_copper_stairs')
		.remove('minecraft:exposed_cut_copper_stairs')
		.remove('minecraft:weathered_cut_copper_stairs')
		.remove('minecraft:oxidized_cut_copper_stairs')
		.remove('minecraft:waxed_cut_copper_stairs')
		.remove('minecraft:waxed_exposed_cut_copper_stairs')
		.remove('minecraft:waxed_weathered_cut_copper_stairs')
		.remove('minecraft:waxed_oxidized_cut_copper_stairs')
		
		.remove('minecraft:cut_copper_slab')
		.remove('minecraft:exposed_cut_copper_slab')
		.remove('minecraft:weathered_cut_copper_slab')
		.remove('minecraft:oxidized_cut_copper_slab')
		.remove('minecraft:waxed_cut_copper_slab')
		.remove('minecraft:waxed_exposed_cut_copper_slab')
		.remove('minecraft:waxed_weathered_cut_copper_slab')
		.remove('minecraft:waxed_oxidized_cut_copper_slab')
		
		
		.remove('spelunkery:andesite_coal_ore')
		.remove('spelunkery:diorite_coal_ore')
		.remove('spelunkery:granite_coal_ore')
		.remove('spelunkery:tuff_coal_ore')
		
		.add('minecraft:gold_ore')
		.add('minecraft:deepslate_gold_ore')
		.add('spelunkery:andesite_gold_ore')
		.add('spelunkery:diorite_gold_ore')
		.add('spelunkery:granite_gold_ore')
		.add('spelunkery:tuff_gold_ore')
		.add('minecraft:nether_gold_ore')
		.add('minecraft:gold_block')
		.add('minecraft:raw_gold_block')
		
		
	event.get('minecraft:needs_iron_tool')
		.remove('minecraft:gold_ore')
		.remove('minecraft:deepslate_gold_ore')
		.remove('spelunkery:andesite_gold_ore')
		.remove('spelunkery:diorite_gold_ore')
		.remove('spelunkery:granite_gold_ore')
		.remove('spelunkery:tuff_gold_ore')
		.remove('minecraft:nether_gold_ore')
		.remove('minecraft:gold_block')
		.remove('minecraft:raw_gold_block')
})
