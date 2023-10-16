package Academic.performance.Coding.comrades.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Staff")
public class Staff {
	@Id
	private int staffid;
	private String name;
	private String emailid;
	private String password;
	private String department;
	private String stafftype;
	public int getStaffid() {
		return staffid;
	}
	public void setStaffid(int staffid) {
		this.staffid = staffid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getStafftype() {
		return stafftype;
	}
	public void setStafftype(String stafftype) {
		this.stafftype = stafftype;
	}
	
	

}
