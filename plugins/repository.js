import createRepository from '~/api/repository';
import createUserRepository from '~/api/userRepository';

export default (ctx, inject) => {
    // REGISTER REPOSITORY
    const repositoryWithAxios = createRepository(ctx.$axios);
    const userRepositoryWithAxios = createUserRepository(ctx.$axios);

    // ASSIGN REPOSITORY FOR GLOBAL VAR
    const repositories = {
        commonRepo: repositoryWithAxios('/'),
        userRepo: userRepositoryWithAxios('/auth'),
    };
    // inject('repository', repositoryWithAxios('/auth'));
    // inject('blogRepository', repositoryWithAxios('/blog'));
    inject('repositories', repositories);
};
// if add repo, at it in repo Type in plugin-types.d
