<script>
import PageHeader from '../components/page-header/page-header.vue';
import ImageContent from '../components/image-content/image-content.vue';
import TagItem from '../components/tag-item/tag-item.vue';
import SearchBox from '../components/search-box/search-box.vue';
import ButtonControl from '../components/button-control/button-control.vue';
import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
import PageFooter from '../components/page-footer/page-footer.vue';
import MainMenu from '../components/main-menu/main-menu.vue';
import TileSmall from '../components/tile-small/tile-small.vue';
import TileMedium from '../components/tile-medium/tile-medium.vue';
import TileLarge from '../components/tile-large/tile-large.vue';
import TilesGrid from '../components/tiles-grid/tiles-grid.vue';
import LinkExternal from '../components/link-external/link-external.vue';


export default {
	components: {
		PageHeader,
		ImageContent,
		TagItem,
		SearchBox,
		ButtonControl,
		ContentWrapper,
		PageFooter,
		MainMenu,
		TileSmall,
		TileMedium,
		TileLarge,
		LinkExternal,

	}
};
</script>

<template>
	<body>
	
		<page-header></page-header>
		<content-wrapper>
	
			<main-menu /> UI Kit
			<top-bar/>
	
			<image-content></image-content>
	
			<tag-item></tag-item>
	
			<a href="">Open Sans</a>
	
			<search-box></search-box>
	
			<LinkExternal></LinkExternal>
			</br>
	
			<button-control></button-control>

			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nulla varius, dapibus purus pharetra, eleifend purus. Quisque venenatis erat nec vestibulum ullamcorper. Suspendisse iaculis feugiat lacus et porttitor. Quisque consequat vulputate nibh sed pharetra. Quisque leo velit, euismod pulvinar augue ac, consectetur sollicitudin nisi. Nunc porta, tortor a fermentum consequat, dolor enim blandit velit, at porttitor risus orci vitae enim. Duis vulputate, tellus non hendrerit auctor, erat quam cursus erat, vitae feugiat purus nulla vel mi.</p>

			<p>Duis dapibus aliquam mi, integer feugiat malesuada libero, sit amet molestie lorem dapibus ac. Suspendisse posuere ac est vitae pretium. Maecenas porttitor at justo vitae imperdiet. Nam posuere facilisis lorem eget pharetra. Duis feugiat ligula eros, id faucibus metus egestas porta. Nullam tincidunt at ex sed condimentum. Aliquam eget auctor est, a aliquam ipsum. Nulla facilisi. Duis rhoncus efficitur odio, sollicitudin dictum ex ornare eget.</p>

			<p>Nullam ut turpis sodales magna euismod ultricies et mattis neque. Fusce quis magna erat. Nullam finibus, eros non tristique blandit, nibh eros placerat risus, a interdum lacus elit in arcu. Donec felis ante, pharetra pulvinar tincidunt at, molestie non velit. Cras lorem nisl, tempus quis mi quis, fringilla ullamcorper ipsum. Suspendisse feugiat sem ligula, eget commodo risus cursus vitae. Curabitur non ornare orci. Vivamus sed volutpat ex, eu venenatis massa.</p>
	
			<tabs></tabs>
	

			<h2>Tiles grid</h2>
			
			<tiles-grid>
				<tile-small>
					<image-content></image-content>
				</tile-small>
				<tile-small>
					<image-content></image-content>
				</tile-small>
				<tile-large>
					<image-content></image-content>
				</tile-large>
				<tile-medium>
					<image-content></image-content>
				</tile-medium>
				<tile-medium>
					<image-content></image-content>
				</tile-medium>
				<tile-medium>
					<image-content></image-content>
				</tile-medium>
			</tiles-grid>
	
			<tabs></tabs>
	
		</content-wrapper>
	
		<page-footer></page-footer>
	
	</body>
</template>