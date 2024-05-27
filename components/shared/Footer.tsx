const Footer = () => {
  return (
    <footer className='py-6 md:px-8 md:py-0'>
      <div className='container flex items-center md:h-24'>
        <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
          Built by{' '}
          <a
            href='https://github.com/jleveneur'
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            Julien Leveneur
          </a>
          . The source code is available on{' '}
          <a
            href='https://github.com/jleveneur/portfolio'
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
