ServerEvents.recipes(event => {
	event.remove({ output: 'minecraft:smithing_table' })
	event.shaped(
		Item.of('minecraft:smithing_table'),
		['II', 'WW', 'WW'],
		{I: 'minecraft:copper_ingot', W: '#minecraft:planks'}
	)
	


	event.shaped(
		Item.of('kubejs:common_upgrade_smithing_template'),
		['AAA', 'ACA', 'AAA'],
		{A: '#spelunkery:pebbles', C: 'farmersdelight:canvas'}
	)
	
	event.shaped(
		Item.of('kubejs:common_upgrade_smithing_template'),
		['AAA', 'ACA', 'AAA'],
		{A: '#spelunkery:pebbles', C: 'minecraft:leather'}
	)
	
	event.remove({ output: 'minecraft:stone_shovel' })
	event.remove({ output: 'minecraft:stone_pickaxe' })
	event.remove({ output: 'minecraft:stone_axe' })
	event.remove({ output: 'minecraft:stone_hoe' })
	event.remove({ output: 'minecraft:stone_sword' })
	event.remove({ output: 'simplest_copper_gear:copper_shovel' })
	event.remove({ output: 'simplest_copper_gear:copper_pickaxe' })
	event.remove({ output: 'simplest_copper_gear:copper_axe' })
	event.remove({ output: 'simplest_copper_gear:copper_hoe' })
	event.remove({ output: 'simplest_copper_gear:copper_sword' })
	event.remove({ output: 'minecraft:iron_shovel' })
	event.remove({ output: 'minecraft:iron_pickaxe' })
	event.remove({ output: 'minecraft:iron_axe' })
	event.remove({ output: 'minecraft:iron_hoe' })
	event.remove({ output: 'minecraft:iron_sword' })
	event.remove({ output: 'minecraft:golden_shovel' })
	event.remove({ output: 'minecraft:golden_pickaxe' })
	event.remove({ output: 'minecraft:golden_axe' })
	event.remove({ output: 'minecraft:golden_hoe' })
	event.remove({ output: 'minecraft:golden_sword' })
	event.remove({ output: 'minecraft:diamond_shovel' })
	event.remove({ output: 'minecraft:diamond_pickaxe' })
	event.remove({ output: 'minecraft:diamond_axe' })
	event.remove({ output: 'minecraft:diamond_hoe' })
	event.remove({ output: 'minecraft:diamond_sword' })
	
	event.smithing('simplest_copper_gear:copper_shovel', 'kubejs:common_upgrade_smithing_template', 'minecraft:wooden_shovel', 'minecraft:copper_ingot')
	event.smithing('simplest_copper_gear:copper_pickaxe', 'kubejs:common_upgrade_smithing_template', 'minecraft:wooden_pickaxe', 'minecraft:copper_ingot')
	event.smithing('simplest_copper_gear:copper_axe', 'kubejs:common_upgrade_smithing_template', 'minecraft:wooden_axe', 'minecraft:copper_ingot')
	event.smithing('simplest_copper_gear:copper_hoe', 'kubejs:common_upgrade_smithing_template', 'minecraft:wooden_hoe', 'minecraft:copper_ingot')
	event.smithing('simplest_copper_gear:copper_sword', 'kubejs:common_upgrade_smithing_template', 'minecraft:wooden_sword', 'minecraft:copper_ingot')

	event.smithing('minecraft:iron_shovel', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_shovel', 'minecraft:iron_ingot')
	event.smithing('minecraft:iron_pickaxe', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_pickaxe', 'minecraft:iron_ingot')
	event.smithing('minecraft:iron_axe', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_axe', 'minecraft:iron_ingot')
	event.smithing('minecraft:iron_hoe', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_hoe', 'minecraft:iron_ingot')
	event.smithing('minecraft:iron_sword', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_sword', 'minecraft:iron_ingot')
	
	event.smithing('minecraft:golden_shovel', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_shovel', 'minecraft:gold_ingot')
	event.smithing('minecraft:golden_pickaxe', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_pickaxe', 'minecraft:gold_ingot')
	event.smithing('minecraft:golden_axe', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_axe', 'minecraft:gold_ingot')
	event.smithing('minecraft:golden_hoe', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_hoe', 'minecraft:gold_ingot')
	event.smithing('minecraft:golden_sword', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_sword', 'minecraft:gold_ingot')
	
	event.smithing('minecraft:diamond_shovel', 'kubejs:common_upgrade_smithing_template', 'minecraft:iron_shovel', 'minecraft:diamond')
	event.smithing('minecraft:diamond_pickaxe', 'kubejs:common_upgrade_smithing_template', 'minecraft:iron_pickaxe', 'minecraft:diamond')
	event.smithing('minecraft:diamond_axe', 'kubejs:common_upgrade_smithing_template', 'minecraft:iron_axe', 'minecraft:diamond')
	event.smithing('minecraft:diamond_hoe', 'kubejs:common_upgrade_smithing_template', 'minecraft:iron_hoe', 'minecraft:diamond')
	event.smithing('minecraft:diamond_sword', 'kubejs:common_upgrade_smithing_template', 'minecraft:iron_sword', 'minecraft:diamond')
	
	event.smithing('minecraft:diamond_shovel', 'kubejs:common_upgrade_smithing_template', 'minecraft:golden_shovel', 'minecraft:diamond')
	event.smithing('minecraft:diamond_pickaxe', 'kubejs:common_upgrade_smithing_template', 'minecraft:golden_pickaxe', 'minecraft:diamond')
	event.smithing('minecraft:diamond_axe', 'kubejs:common_upgrade_smithing_template', 'minecraft:golden_axe', 'minecraft:diamond')
	event.smithing('minecraft:diamond_hoe', 'kubejs:common_upgrade_smithing_template', 'minecraft:golden_hoe', 'minecraft:diamond')
	event.smithing('minecraft:diamond_sword', 'kubejs:common_upgrade_smithing_template', 'minecraft:golden_sword', 'minecraft:diamond')
	
	
	event.remove({ output: 'simplest_copper_gear:copper_helmet' })
	event.remove({ output: 'simplest_copper_gear:copper_chestplate' })
	event.remove({ output: 'simplest_copper_gear:copper_leggings' })
	event.remove({ output: 'simplest_copper_gear:copper_boots' })
	event.remove({ output: 'minecraft:iron_helmet' })
	event.remove({ output: 'minecraft:iron_chestplate' })
	event.remove({ output: 'minecraft:iron_leggings' })
	event.remove({ output: 'minecraft:iron_boots' })
	event.remove({ output: 'minecraft:golden_helmet' })
	event.remove({ output: 'minecraft:golden_chestplate' })
	event.remove({ output: 'minecraft:golden_leggings' })
	event.remove({ output: 'minecraft:golden_boots' })
	event.remove({ output: 'minecraft:diamond_helmet' })
	event.remove({ output: 'minecraft:diamond_chestplate' })
	event.remove({ output: 'minecraft:diamond_leggings' })
	event.remove({ output: 'minecraft:diamond_boots' })
	
	event.smithing('simplest_copper_gear:copper_helmet', 'kubejs:common_upgrade_smithing_template', 'minecraft:leather_helmet', 'minecraft:copper_ingot')
	event.smithing('simplest_copper_gear:copper_chestplate', 'kubejs:common_upgrade_smithing_template', 'minecraft:leather_chestplate', 'minecraft:copper_ingot')
	event.smithing('simplest_copper_gear:copper_leggings', 'kubejs:common_upgrade_smithing_template', 'minecraft:leather_leggings', 'minecraft:copper_ingot')
	event.smithing('simplest_copper_gear:copper_boots', 'kubejs:common_upgrade_smithing_template', 'minecraft:leather_boots', 'minecraft:copper_ingot')
	
	event.smithing('minecraft:iron_helmet', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_helmet', 'minecraft:iron_ingot')
	event.smithing('minecraft:iron_chestplate', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_chestplate', 'minecraft:iron_ingot')
	event.smithing('minecraft:iron_leggings', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_leggings', 'minecraft:iron_ingot')
	event.smithing('minecraft:iron_boots', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_boots', 'minecraft:iron_ingot')
	
	event.smithing('minecraft:golden_helmet', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_helmet', 'minecraft:gold_ingot')
	event.smithing('minecraft:golden_chestplate', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_chestplate', 'minecraft:gold_ingot')
	event.smithing('minecraft:golden_leggings', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_leggings', 'minecraft:gold_ingot')
	event.smithing('minecraft:golden_boots', 'kubejs:common_upgrade_smithing_template', 'simplest_copper_gear:copper_boots', 'minecraft:gold_ingot')
	
	event.smithing('minecraft:diamond_helmet', 'kubejs:common_upgrade_smithing_template', 'minecraft:iron_helmet', 'minecraft:diamond')
	event.smithing('minecraft:diamond_chestplate', 'kubejs:common_upgrade_smithing_template', 'minecraft:iron_chestplate', 'minecraft:diamond')
	event.smithing('minecraft:diamond_leggings', 'kubejs:common_upgrade_smithing_template', 'minecraft:iron_leggings', 'minecraft:diamond')
	event.smithing('minecraft:diamond_boots', 'kubejs:common_upgrade_smithing_template', 'minecraft:iron_boots', 'minecraft:diamond')
	
	event.smithing('minecraft:diamond_helmet', 'kubejs:common_upgrade_smithing_template', 'minecraft:golden_helmet', 'minecraft:diamond')
	event.smithing('minecraft:diamond_chestplate', 'kubejs:common_upgrade_smithing_template', 'minecraft:golden_chestplate', 'minecraft:diamond')
	event.smithing('minecraft:diamond_leggings', 'kubejs:common_upgrade_smithing_template', 'minecraft:golden_leggings', 'minecraft:diamond')
	event.smithing('minecraft:diamond_boots', 'kubejs:common_upgrade_smithing_template', 'minecraft:golden_boots', 'minecraft:diamond')
	
	
	event.remove({ output: 'farmersdelight:iron_knife' })
	event.remove({ output: 'farmersdelight:golden_knife' })
	event.remove({ output: 'farmersdelight:diamond_knife' })
	
	event.smithing('farmersdelight:iron_knife', 'kubejs:common_upgrade_smithing_template', 'farmersdelight:flint_knife', 'minecraft:iron_ingot')
	event.smithing('farmersdelight:golden_knife', 'kubejs:common_upgrade_smithing_template', 'farmersdelight:flint_knife', 'minecraft:gold_ingot')
	event.smithing('farmersdelight:diamond_knife', 'kubejs:common_upgrade_smithing_template', 'farmersdelight:iron_knife', 'minecraft:diamond')
	event.smithing('farmersdelight:diamond_knife', 'kubejs:common_upgrade_smithing_template', 'farmersdelight:golden_knife', 'minecraft:diamond')
})
