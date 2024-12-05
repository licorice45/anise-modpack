StartupEvents.registry('item', event => {
	//Common Upgrade Template
	event.create('common_upgrade_smithing_template')
	.displayName('Smithing Template')
	.tooltip('§7Common Upgrade')
	.texture('kubejs:item/common_upgrade_smithing_template')
})

StartupEvents.modifyCreativeTab('minecraft:ingredients', event => {
	event.addAfter('minecraft:snort_pottery_sherd', 'kubejs:common_upgrade_smithing_template')
})
