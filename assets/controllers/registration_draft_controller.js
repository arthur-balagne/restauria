import { Controller } from '@hotwired/stimulus';

const STORAGE_KEY = 'restauria.registrationDraft';

export default class extends Controller {
    static targets = ['cuisine'];

    connect() {
        this.restore();
        this.element.addEventListener('submit', () => this.persist());
    }

    persist() {
        const address = this.addressInput()?.value.trim() ?? '';
        const cuisineIds = this.cuisineTargets.filter((c) => c.checked).map((c) => c.value);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ address, cuisineIds }));
    }

    restore() {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (null === raw) {
            return;
        }

        try {
            const draft = JSON.parse(raw);
            const address = this.addressInput();
            if (address) {
                address.value = draft.address ?? '';
            }
            const cuisineIds = new Set(draft.cuisineIds ?? []);
            this.cuisineTargets.forEach((checkbox) => {
                checkbox.checked = cuisineIds.has(checkbox.value);
            });
        } catch {
            window.localStorage.removeItem(STORAGE_KEY);
        }
    }

    addressInput() {
        return this.element.elements.namedItem('address');
    }
}
