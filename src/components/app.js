import { h } from 'preact';
import { useInstaller } from '../lib/installer';


export default function App() {

	const {installPrompt, isStandalone} = useInstaller();

	return (
		<div id="app">
			<h1>Install Test</h1>
			{
				installPrompt && <a href="#" onclick={installPrompt}>Install as PWA</a> 
				|| isStandalone && 'PWA is installed!'
			}
		</div>
	);
}