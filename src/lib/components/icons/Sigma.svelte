<script lang="ts">
	let {
		size = '1em',
		width = size,
		height = size,
		color = 'currentColor',
		viewBox = '0 0 80 70'
	}: {
		size?: string | number;
		width?: string | number;
		height?: string | number;
		color?: string;
		viewBox?: string;
		ariaHidden?: boolean;
		title?: string | null;
		desc?: string | null;
	} = $props();
</script>

<svg {width} {height} {viewBox}>
	<polygon
		id="Path"
		fill={color}
		points="58.0882353 67.304902 20.7181373 51.0789216 44.8828431 51.0789216"
	/>
	<polygon
		id="Path"
		fill={color}
		points="34.8529412 34.5431373 61.3411765 66.995098 50.8078431 17.5039216"
	/>
	<polygon id="Path" fill={color} points="0 0 32.9553922 32.6455882 48.9102941 15.6063725" />
	<polygon
		id="Path"
		fill={color}
		points="63.4323529 0.348529412 51.0789216 13.5539216 39.1901961 9.72009804"
	/>
	<polygon
		id="Path"
		fill={color}
		points="66.0656863 1.47156863 59.0563725 8.59705882 78.1480392 8.90686275"
	/>
</svg>
