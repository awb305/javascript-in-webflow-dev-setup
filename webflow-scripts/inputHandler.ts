import { runSmartyStreets } from './runSmartyStreets';

export const inputHandler = () => {
  console.log('input handler');
  const addressInputArray = document.querySelectorAll(
    '[data-smarty-street="address"]'
  );
  const addressInput = addressInputArray[0] as HTMLInputElement;

  console.log('addressInput', addressInput);

  const logInput = async () => {
    const resultDivArray = document.querySelectorAll(
      '[data-smarty-streets="address-suggestion"]'
    );
    const resultDiv = resultDivArray[0] as HTMLElement;

    console.log('resultDiv', resultDiv);

    // Remove old suggestions
    const oldSuggestions = document.querySelectorAll(
      '[data-smarty-streets="temp-suggestion"]'
    );

    oldSuggestions.forEach((div) => div.remove());

    if (addressInput?.value && addressInput.value.length > 3) {
      let { value } = addressInput;
      console.log('value', value);

      const suggestions = await runSmartyStreets(value);
      console.log('suggestions', suggestions);

      suggestions.forEach((address: { streetLine: string }, i: number) => {
        const suggestionDiv = resultDiv?.cloneNode() as HTMLElement;

        suggestionDiv.innerHTML = address.streetLine;
        console.log('suggestion Div', suggestionDiv);

        suggestionDiv.setAttribute('data-smarty-streets', 'temp-suggestion');
        suggestionDiv.style.opacity = '0';
        suggestionDiv.style.transitionProperty = 'opacity';
        suggestionDiv.style.transitionTimingFunction =
          'cubic-bezier(0.4, 0, 0.2, 1)';
        suggestionDiv.style.transitionDuration = '400ms';

        if (i < 3) {
          resultDiv?.after(suggestionDiv);
        }
      });

      const tempSuggestionDivArray = document.querySelectorAll(
        '[data-smarty-streets="temp-suggestion"]'
      ) as unknown as HTMLElement[];

      tempSuggestionDivArray.forEach((div) => (div.style.opacity = '1'));

      resultDiv.style.opacity = '1';
    }
  };

  addressInput?.addEventListener('input', logInput);
};
