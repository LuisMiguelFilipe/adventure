export const routes = {
    userProfile: () => { return { name: 'userProfile' } },
    newQuest: (questId: string) => { return { name: 'newQuest', params: { questId } } },
}