export function Project() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="SGU Schedule Extension"
              description="This is a Chrome Extension built in ReactJS that helps you retrieve your schedule from the SGU website."
              technologies="Node.js, JavaScript, Chrome Extension, TypeScript, Tailwind CSS"
              repository="https://github.com/tnowad/sgu-extension"
            />
            <ProjectCard
              title="The Leafy Liberties"
              description="The Leafy Liberties is a PHP-based bookstore project developed using the MVC (Model-View-Controller) architecture, MySQL as the database, and Tailwind CSS for styling."
              technologies="JavaScript, MySQL, Java, Docker, PHP, Docker Compose, Tailwind CSS"
              repository="https://github.com/tnowad/the-leafy-liberties"
            />
            <ProjectCard
              title="Bookstore Management Application"
              description="This project is a bookstore management application built using Java Swing for the user interface, MySQL for the database, and Docker for containerization."
              technologies="MySQL, Java, Docker, Maven, Docker Compose, Java Swing"
              repository="https://github.com/tnowad/bookstore-management-application"
            />
            <ProjectCard
              title="Food & Drink Ordering Management System"
              description="The Food & Drink Ordering Management System is a Java-based application that allows users to manage food and drink orders. It provides functionalities for users, salespersons, and managers to view products, manage user information, create invoices, and perform various management tasks."
              technologies="Java, LocalStorage, Console Application"
              repository="https://github.com/tnowad/Food-Drink-Ordering-Management-System"
            />
            <ProjectCard
              title="RaKuWa (らくわ) - E-commerce Store"
              description="RaKuWa (らくわ) is an e-commerce store with a frontend implemented using pure CSS, HTML, and vanilla JavaScript. It allows users to browse and purchase products, with the ability to save data locally using localStorage."
              technologies="JavaScript, CSS, HTML, Frontend"
              repository="https://github.com/tnowad/rakuwa"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string;
  repository: string;
};
function ProjectCard({
  title,
  description,
  technologies,
  repository,
}: ProjectCardProps) {
  return (
    <div className="rounded-lg shadow-md p-6 backdrop-blur-sm">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-gray-800 font-semibold">
        Technologies: {technologies}
      </p>
      <a
        href={repository}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Repository
      </a>
    </div>
  );
}
