import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => ({
        isLoading: false,
        user: null,
        currentView: null,
    }),
    getters: {
        getIsLoading(state) {
            return state.isLoading;
        },
        getUser(state) {
            return state.user;
        },
        getCurrentView(state) {
            return state.currentView;
        },

    },
    actions: {
        setIsLoading(isLoading) {
            this.isLoading = isLoading;
        },
        setUser(user) {
            this.user = user;
        },
        clearUser() {
            this.user = null;
        },
        setCurrentView(currentView) {
            this.currentView = currentView;
        },

    }
});