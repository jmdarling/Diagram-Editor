/**
 * Represents a Loadbalancer in a network topology.
 * Subclass of Component.
 */
define([
	'./Component'
], function (Component) {
	return Component.extend({
		defaults: {
			type: 'Loadbalancer',
			name: '',

			// Text field content is left to be filled in by the parent class's
			// initialize() function.
			template: _.template(
				[
					'<text class="type" text-anchor="middle" font-size="15" x="50" y="0"><%= type %></text>',
					'<g class="scalable">',
					'<path transform="translate(0, 50)" id="code-fork-icon" fill="#333333" d="M600.1,560c30.9,0,56-25.1,56-56c0-30.9-25.1-56-56-56c-24.7,0-45.5,16.1-52.8,38.3c-80.1,3.1-88.9-37.7-100.5-93.3c-6.8-31.8-14.5-68-39-94.2h139.9c7.7,21.7,28.2,37.3,52.5,37.3c30.9,0,56-25.1,56-56s-25.1-56-56-56c-24.4,0-44.9,15.6-52.5,37.3H316.7c-7.7-21.7-28.2-37.3-52.5-37.3c-30.9,0-56,25.1-56,56s25.1,56,56,56c24.1,0,44.6-15.3,52.4-36.9c73.1,5,82.3,47.9,93.5,101.5c12,56.7,26.8,126.4,137.6,122.7C555.7,544.8,576,560,600.1,560zM600.1,246.5c18.4,0,33.6,15.2,33.6,33.6c0,18.4-15.2,33.6-33.6,33.6c-18.4,0-33.6-15.2-33.6-33.6C566.5,261.6,581.6,246.5,600.1,246.5z M264.1,313.7c-18.4,0-33.6-15.2-33.6-33.6c0-18.4,15.2-33.6,33.6-33.6c18.4,0,33.6,15.2,33.6,33.6C297.7,298.5,282.6,313.7,264.1,313.7z M566.5,504c0-18.4,15.2-33.6,33.6-33.6c18.4,0,33.6,15.2,33.6,33.6c0,18.4-15.2,33.6-33.6,33.6C581.6,537.6,566.5,522.4,566.5,504z"/>',
					'<path transform="translate(0, 50)" id="code-fork-icon_1_" fill="#333333" d="M547.8,36.6C437,32.9,422.1,102.8,410.2,159.3c-11.3,53.5-20.3,96.5-93.5,101.5c-7.8-21.5-28.2-36.9-52.4-36.9c-30.9,0-56,25.1-56,56s25.1,56,56,56c24.4,0,44.9-15.6,52.5-37.3h230.8c7.7,21.7,28.2,37.3,52.5,37.3c30.9,0,56-25.1,56-56s-25.1-56-56-56c-24.4,0-44.9,15.6-52.5,37.3H407.7c24.5-26.4,32.2-62.4,39-94.2c11.8-55.5,20.4-96.5,100.5-93.3c7.5,22.2,28.1,38.3,52.8,38.3c30.9,0,56-25.1,56-56S631,0,600.1,0C576,0.1,555.7,15.3,547.8,36.6z M566.5,280.1c0-18.4,15.2-33.6,33.6-33.6c18.4,0,33.6,15.2,33.6,33.6c0,18.4-15.2,33.6-33.6,33.6C581.6,313.7,566.5,298.5,566.5,280.1z M297.7,280.1c0,18.4-15.2,33.6-33.6,33.6c-18.4,0-33.6-15.2-33.6-33.6c0-18.4,15.2-33.6,33.6-33.6C282.6,246.5,297.7,261.6,297.7,280.1z M600.1,22.5c18.4,0,33.6,15.2,33.6,33.6s-15.2,33.6-33.6,33.6c-18.4,0-33.6-15.2-33.6-33.6S581.6,22.5,600.1,22.5z"/>',
					'<rect transform="translate(0, 50)" x="208.3" fill="rgba(0, 0, 0, 0)" width="447.8" height="560"/>', // Invisible rectangle to allow the component to be clicked where it should be blank.
					'</g>',
					'<text class="name" text-anchor="middle" font-size="15" x="50" y="85"><%= name %></text>'
				].join('')
			),

			// All fill attributes are set explicitly so the color of components
			// can be easily changed externally.
			attrs: {
				path: {
					fill: "#333333"
				},
				text: {
					fill: "#333333"
				}
			},

			// The icon to be displayed when the component is in the Palette.
			paletteIcon: 'img/loadbalancer_palette.svg'
		}
	});
});
