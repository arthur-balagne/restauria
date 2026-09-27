import AuthDemoFormController from './auth_demo_form_controller.js';

const STORAGE_KEY = 'restauria.registrationDraft';

export default class extends AuthDemoFormController {
    static targets = ['status', 'cuisine', 'error'];
    static values = { maxCuisines: { type: Number, default: 5 } };

    connect() {
        this.restore();
        this.element.addEventListener('submit', (event) => this.onSubmit(event));
    }

    onSubmit(event) {
        this.errorTarget.textContent = '';

        const cuisineIds = this.selectedCuisineIds();
        if (cuisineIds.length < 1 || cuisineIds.length > this.maxCuisinesValue) {
            event.preventDefault();
            this.errorTarget.textContent = `Choisissez entre 1 et ${this.maxCuisinesValue} cuisines.`;

            return;
        }

        const address = this.addressInput().value.trim();
        if ('' === address) {
            event.preventDefault();
            this.errorTarget.textContent = 'L’adresse est obligatoire.';

            return;
        }

        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ address, cuisineIds }));
    }

    restore() {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (null === raw) {
            return;
        }

        try {
            const draft = JSON.parse(raw);
            this.addressInput().value = draft.address ?? '';
            const cuisineIds = new Set(draft.cuisineIds ?? []);
            this.cuisineTargets.forEach((checkbox) => {
                checkbox.checked = cuisineIds.has(checkbox.value);
            });
        } catch {
            window.localStorage.removeItem(STORAGE_KEY);
        }
    }

    selectedCuisineIds() {
        return this.cuisineTargets.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
    }

    addressInput() {
        return this.element.elements.namedItem('address');
    }
}
