import { Ansible, Aws, Azure, Burpsuite, Docker, Elastic, GCloud, Git, Github, Gitlab, Go, Grafana, Helm, Jenkins, Kubernetes, Mariadb, Metasploit, Mongodb, Mysql, Nmap, Nodejs, Postgresql, Prometheus, Proxmox, Python, Terraform, Wireshark } from "./stackIcons";

function Stack({ project }) {
    const { ctgtitle, stacks } = project;

    const stackComponents = {
        ansible: Ansible,
        aws: Aws,
        azure: Azure,
        burpsuite: Burpsuite,
        docker: Docker,
        elastic: Elastic,
        gcloud: GCloud,
        git: Git,
        github: Github,
        gitlab: Gitlab,
        go: Go,
        grafana: Grafana,
        helm: Helm,
        jenkins: Jenkins,
        kubernetes: Kubernetes,
        mariadb: Mariadb,
        metasploit: Metasploit,
        mongodb: Mongodb,
        mysql: Mysql,
        nmap: Nmap,
        nodejs: Nodejs,
        postgresql: Postgresql,
        python: Python,
        prometheus: Prometheus,
        proxmox: Proxmox,
        terraform: Terraform,
        wireshark: Wireshark,
    };

    const filteredIcons = stacks.map((stack) => {
        const StackComponent = stackComponents[stack];
        return StackComponent ? <StackComponent key={stack} /> : null;
    });

    return (
        <div className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
            <h1 className="text-center text-gray-600 dark:text-gray-300">{ctgtitle}</h1>
            <div className="flex flex-wrap justify-center gap-5">{filteredIcons}</div>
        </div>
    );
}

export default Stack;
