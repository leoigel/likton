<template>
    <div class="container_loading">
	<div class="yellow circle_loading"></div>
	<div class="red circle_loading"></div>
	<div class="blue circle_loading"></div>
	<div class="violet circle_loading"></div>
</div>
</template>

<script>
export default {

}
</script>

<style>
:root {
	--yellow: #feb60a;
	--red: #ff0062;
	--blue: #00dbf9;
	--violet: #da00f7;
}
	
.container_loading {
	display: flex;
	justify-content: center;
	align-items: center;
}
.circle_loading {
	width: 15px;
	height: 15px;
	border-radius: 100%;
	margin: 10px;
	background-image: linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 100%);
	animation: bounce 1.5s 0.5s linear infinite;
}
.yellow {
	background-color: var(--yellow);
}

.red {
	background-color: var(--red);
	animation-delay: 0.1s;
}

.blue {
	background-color: var(--blue);
	animation-delay: 0.2s;
}

.violet {
	background-color: var(--violet);
	animation-delay: 0.3s;
}

@keyframes bounce {
	0%, 50%, 100% {
		transform: scale(1);
		filter: blur(0px);
	}
	25% {
		transform: scale(0.6);
		filter: blur(3px);
	}
	75% {
		filter: blur(3px);
		transform: scale(1.4);
	}
}
</style>
