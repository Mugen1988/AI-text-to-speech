import { HfInference } from '@huggingface/inference';

// Initialize the Hugging Face Inference instance with your token
const hf = new HfInference('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');

// Function to generate speech from text
async function generateSpeech() {
    const textInput = document.getElementById('text-input');
    const text = textInput.value;
    if(text){
        try {
            const response = await hf.textToSpeech({
                model: 'espnet/kan-bayashi_ljspeech_vits',
                inputs: text
            });
    
            const audioUrl = URL.createObjectURL(response);
    
            // Update the audio element source
            const audioElement = document.getElementById('speech');
            audioElement.src = audioUrl;
        } catch (error) {
            console.error('Error generating speech:', error);
        }
    }
}

// Attach the click event handler to the button
document.getElementById('generate-speech').addEventListener('click', generateSpeech);
